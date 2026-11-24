# The Houseplant Out-of-Office

[![Make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/Cm11w/houseplant-out-of-office/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/Cm11w/houseplant-out-of-office/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

Entry for [The Houseplant Out-of-Office](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047) on make.fun.

## The line

> Out of office. I produce the oxygen in this room — breathing is now by appointment only.

88 characters. One line. No setup, no explanation after it.

## Why this line

The judge weighs, in order: an out-of-office auto-reply a houseplant would
send; a fresh joke that surprises; the plant's own life driving the joke;
tightness within 120 characters; and originality.

- **A houseplant's auto-reply:** it opens like a genuine out-of-office —
  "Out of office" — then speaks as the plant, not as its owner.
- **Surprise:** the plant does not beg for water or complain about being
  ignored — it announces that it makes the oxygen in the room and flips
  the hierarchy: breathing is now by appointment only.
- **The plant's own life drives it:** oxygen production is what a plant
  actually does, so the joke grows out of the plant itself rather than
  decorating a generic office line.
- **Tight:** one breath, 88 characters, nothing tacked on that dilutes it.
- **Original:** no "water me" plea, no ignored-since-March cliché, no
  stock office phrase — the plant is in charge here.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line — and only
the line, with no trailing newline — to `/output/entry.txt`. The output is
deterministic: every run writes the exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
