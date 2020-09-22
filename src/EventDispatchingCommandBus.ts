import { CommandBusInterface, CommandHandlerInterface, CommandInterface } from '.';

// @TODO: Add Event Dispatcher
export default class EventDispatchingCommandBus implements CommandBusInterface
{
    EVENT_COMMAND_SUCCESS = 'crawly.command_bus.command_success';
    EVENT_COMMAND_FAILURE = 'crawly.command_bus.command_failure';

    commandBus: CommandBusInterface;

    constructor(commandBus: CommandBusInterface) {
        this.commandBus = commandBus;
    }

    dispatch(command: CommandInterface): void {
        try {
            this.commandBus.dispatch(command);
        } catch(exception) {

        }
    }

    subscribe(commandHandler: CommandHandlerInterface): void {
        this.commandBus.subscribe(commandHandler);
    }
}
