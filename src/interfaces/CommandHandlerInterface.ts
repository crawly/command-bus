import CommandInterface from './commandInterface';

export default interface CommandHandlerInterface
{
    handle(command: CommandInterface): void;
}
