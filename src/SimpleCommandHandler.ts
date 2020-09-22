import { CommandInterface, CommandHandlerInterface } from '.';
import { injectable } from 'inversify';

@injectable()
export default abstract class SimpleCommandHandler implements CommandHandlerInterface
{
    handle(command: CommandInterface): void {
        const method = this.getHandleMethod(command);

        if (typeof (this as any)[`${method}`] === "function") {
          (this as any)[`${method}`](command);
        }
    }

    getHandleMethod(command: CommandInterface): string
    {
        return 'handle' + command.constructor.name;
    }
}
