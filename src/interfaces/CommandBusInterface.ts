import CommandInterface from './commandInterface';
import CommandHandlersInterface from './commandHandlerInterface';

export default interface CommandBusInterface
{   
    dispatch(command: CommandInterface): void;

    subscribe(commandHandler: CommandHandlersInterface): void;
}
