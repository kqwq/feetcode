# YouTube Bot Comments

Every day the YouTube comment section is flooded with bot accounts. Recently, the team at Google has tasked you to write a program that will filter out the bot comments. The program should take in a list of comments and return a list of comment IDs that belong to bot users.
\
\
Return a comma-separated list of comment IDs that are copies of original comments based on their text content. If 2 identical comments have the same timestamp, neither should be included in output.
\
\
A YouTube comment is represented as the following data format:

```ID,author,text,timestamp```

## Example Input:
```
420,MrBeast,Great video as always!,1507593600000
421,wizard_coder,Delete your channel NOW,1607593600000
422,Totally not a bot account,Great video as always!,1707593600000
423,MrBeat,Great video as always!,1807593600000
...
```

## Output:
`422,423`

## Constraints:
comments.length = 100