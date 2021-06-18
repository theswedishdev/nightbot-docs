# 8 ball
Ask the magic 8ball a yes/no question, and you shall receive an answer.

## Usage
`!8ball`

### Example
`!8ball`

```
@TheSwedishDev -> 🎱 All signs point to yes...
```

## User level
The recommended user level for this command is `everyone`.

## Add command
```js
!addcom !8ball @$(user) -> 🎱 $(eval const responses = ['All signs point to yes...', 'Yes!', 'My sources say nope.', 'You may rely on it.', 'Concentrate and ask again...', 'Outlook not so good...', 'It is decidedly so!', 'Better not tell you.', 'Very doubtful.', 'Yes - Definitely!', 'It is certain!', 'Most likely.', 'Ask again later.', 'No!', 'Outlook good.', 'Don\'t count on it.']; responses[Math.floor(Math.random() * responses.length)];)
```