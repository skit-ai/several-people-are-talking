# several-people-are-talking

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

Audio archive of reading club discussions at Vernacular.ai. Accessible
[here](https://backyard.vernacular.ai/several-people-are-talking).

## Participation guidelines

`several-people-are-talking` (abbreviated `spat`) is an internal reading club
which meets together regularly for sharing summaries and learnings from various
readings.

To make the discussions concise and fruitful (it's recommended to use a visual
timer like [this](http://www.timer-tab.com/)), we have a list of questions that
you should attempt to answer in your summaries. Since different kinds of
readings, at different times, have different provenances and purposes, a summary
might only cover a subset of this. Though if your summary doesn't answer any
question from here then a) let's talk and add a new question or b) let's again
talk and figure out a better summary.

1. Why did you choose this book/article/whatever (called baw henceforth)?
2. Where did you come across this baw?
3. What did you learn in this baw?
4. What did you like in this baw?
5. What did you not like in this baw?

A few example summaries along with the questions they target follow:

> Yesterday I finished Bell Jar which is the only novel by Sylvia Plath. She is
> famous for her poems by the way. I started this book as I was looking for
> disturbing pieces covering personal trauma of some sort as they are deeply
> introspective and cathartic. Since this book was partly autobiographic, it
> probably makes more sense with some context about Plath. Anyway, this is a
> story about a reasonably successful, academically, girl going through an
> identity crisis, suicide attempts, mental asylum and back to sanity. I like
> the way the transition happened in middle when she expresses the deep
> indecisiveness and feelings of absurdity in the character.

_Questions answered: 1, 4_

> Yesterday, I heard a podcast on TAL about small things. There were three
> stories covering something about tinyness in general. I liked the last one
> where they covered Robert Walser, an author who had a tragic association or
> rather dissociation with society (he faded to obscurity and ended up in a
> mental asylum). Years later people found scraps of papers in his belongings,
> all of which had microscopic texts written on them. In early 2000 (he died
> around ~1950) we got those deciphered and they now are available in a body of
> work called the Microscripts. I don't exactly know what kind of content Walser
> wrote in general but there was a mention about a job letter where he wrote
> about a person applying for a job saying things like 'I am not bright. I can't
> figure things out quickly and have no ambitions'. Sounds interesting.

_Questions answered 2, 3_

## Editing guidelines

TODO:

Each day has the following items:
1. Main file `audio.ogg` (use `ffmpeg -i input -acodec libopus audio.ogg`).
2. An audacity compatible label track file `labels.txt`
3. `index.md` file for text, transcriptions etc.

Audios are kept in the s3 bucket `several-people-are-talking/<date>/`. Rest are
in `./src/pages/posts/<date>/`.

## Edit posts
To edit posts you need to go navigate to `src/pages/posts/<date>/`, [here](https://github.com/Vernacular-ai/several-people-are-talking/tree/master/src/pages/posts) is a link to take you there quickly.

## Project setup
1. `git clone https://github.com/Vernacular-ai/several-people-are-talking.git`
2. `cd several-people-are-talking`
3. `yarn install`

## Build static file
Refer to the full [documentation](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)
```
yarn deploy
```

For deploying on backyard, run `./backyard-deploy.sh`. You will need to be
logged in aws cli.
