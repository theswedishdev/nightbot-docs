# Shout out
Shouts out a Twitch user by their username.

## Usage
`!so [<twitch_channel_username>]`

#### Example usage
`!so TheSwedishDev`

```
Make sure to check out TheSwedishDev over at https://www.twitch.tv/theswedishdev where they were last seen streaming just chatting.
```

## User level
The recommended user level for this command is `moderator`.

## Add command
```js
!addcom !so -ul=moderator $(twitch $(touser) "Make sure to check out {{displayName}} over at {{url}} where they were last seen streaming {{game}}.")
```
