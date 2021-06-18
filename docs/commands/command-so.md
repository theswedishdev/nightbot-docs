# Shout out
Shouts out a Twitch user by their username.

## Usage
`!so [<twitch_channel_username>]`

#### Example usage
`!so theswedishdev`

```
Make sure to check out ✨ TheSwedishDev ✨ over at https://www.twitch.tv/theswedishdev we think they're really cool!
```

## User level
The recommended user level for this command is `moderator`.

## Add command
```js
!addcom !so -ul=moderator $(twitch $(touser) "Make sure to check out ✨ {{displayName}} ✨ over at {{url}} we think they're really cool!")
```
