import { CommandBusInterface, CommandHandlerInterface, CommandInterface } from '.';
import { injectable } from 'inversify';

@injectable()
export default class SimpleCommandBus implements CommandBusInterface
{
    commandHandlers: Array<CommandHandlerInterface> = [];
    queue: Array<CommandInterface> = [];
    isDispatching: Boolean = false;

    subscribe(commandHandler: CommandHandlerInterface): void {
        this.commandHandlers.push(commandHandler);
    }

    dispatch(command: CommandInterface): void {
        this.queue.push(command);

        if (this.isDispatching) {
            return;
        }
       
        this.isDispatching = true;

        while (this.queue.length) {
            const commandToExecute = this.queue.shift() as CommandInterface[];
           
            this.commandHandlers.forEach(function (handler) {
                handler.handle(commandToExecute);
            })
        }

        this.isDispatching = false;
    }    
}
