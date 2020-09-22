# @crawly/command-bus

This library provides a simple command bus library for Node.js

## Installation

Run the following to install this library:

```bash
npm install @crawly/command-bus --save
```

## Usage

You build a simple message object like this:
```ts
import { CommandInterface } from '@crawly/command-bus';

export class CreateUserCommand implements CommandInterface
{
    constructor(
    public readonly userName: string,
    public readonly userEmail: string,
  ) {}

  //...
}
```

And a Handler class that expects it:
```ts

import { SimpleCommandHandler, CommandInterface } from '@crawly/command-bus';

export class CreateUserCommandHandler extends SimpleCommandHandler
{
  public handleCreateUserCommand(createUserCommand: CommandInterface): void {
    // Logic to persist user
    // createUserCommand.getUserName();
    // createUserCommand.getUserEmail();
  }
}
```

Use CommandBus to dispatch commands.

```ts
const commandBus = new SimpleCommandBus();

// Register command handlers
commandBus.subscribe(new CreateUserCommandHandler());

// Dispatch command
commandBus.dispatch(new CreateUserCommand('John Doe', 'john@example.com'));

```

## Command Events

This library provides `EventDispatchingCommandBus`, a command bus decorator that dispatches events.

`EventDispatchingCommandBus` dispatches events signalling whether a command was executed successfully or if it failed.


| Event name                         | Description                                             |
|------------------------------------|---------------------------------------------------------|
| crawly.command_bus.command_success | Emitted when a command is executed without errors       |
| crawly.command_bus.command_failure | Emitted when an error occurred during command execution |