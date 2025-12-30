import { db } from "@/config/db";
import { exerciseTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const DATA = [
  {
    "courseId": 2,
    "exerciseId": "explore-the-web-skeleton",
    "exerciseName": "Explore the Web Skeleton",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body><h2>Welcome to the Web Skeleton</h2><p>The web is like a living creature, and HTML is its skeleton.</p><p>Every website you see is built on a basic HTML structure.</p><p>This structure tells the browser how to understand the page.</p><p>Think of <code><span style='color: #40E0D0;'>&lt;html&gt;</span></code> as the body of the creature.</p><p>The <code style='color: #40E0D0;'>&lt;head&gt;</code> is the brain that stores information.</p><p>The <code style='color: #40E0D0;'>&lt;body&gt;</code> is where all visible content lives.</p><p>Without a skeleton, the browser gets confused.</p><p>HTML elements must be placed correctly.</p><p>This makes your page predictable and stable.</p><p>Just like in a game, rules matter.</p><p>Learn the skeleton once, and all pages become easier.</p><p>Now lets explore it step by step.</p></body>",
      "task": "<body><h3>Your Mission</h3><p>Create a basic HTML skeleton.</p><p>Add <code style='color: #40E0D0;'>&lt;html&gt;</code>, <code style='color: #40E0D0;'>&lt;head&gt;</code>, and <code style='color: #40E0D0;'>&lt;body&gt;</code> tags.</p><p>Inside the body, write a short sentence.</p></body>",
      "hint": "<body><p>The browser always expects <code>&lt;html&gt;</code> as the root.</p><p>Everything visible goes inside <code>&lt;body&gt;</code>.</p></body>",
      "starterCode": {
        "/index.html": "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Skeleton</title>\n  </head>\n  <body>\n    <!-- Add your text here -->\n  </body>\n</html>",
      },
      "regex": "(?i)<title>\\s*Web Skeleton Adventure\\s*</title>",
      "output": "<title>Web Skeleton Adventure</title>",
      "hintXp": 30,
    },
  },
  {
    "courseId": 2,
    "exerciseId": "build-your-base-camp",
    "exerciseName": "Build Your Base Camp",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body><h2>Building a Base Camp</h2><p>Your base camp is where your page lives.</p><p>HTML needs a safe starting point.</p><p>The <code>&lt;!DOCTYPE&gt;</code> tells the browser the rules.</p><p>It says: we are using modern HTML.</p><p>Without it, things may break.</p><p>This is like choosing the correct game mode.</p><p>The browser then loads the page properly.</p><p>Small line, big importance.</p><p>Always place it at the top.</p><p>No spaces, no text before it.</p><p>This keeps your camp stable.</p><p>Now lets set it up.</p></body>",
      "task": "<body><h3>Your Mission</h3><p>Add a correct <code>&lt;!DOCTYPE html&gt;</code> line.</p><p>Make sure it is the first line.</p></body>",
      "hint": "<body><p>The doctype goes above <code>&lt;html&gt;</code>.</p></body>",
      "starterCode": {
        "/index.html": "<html>\n  <head>\n    <title>Base Camp</title>\n  </head>\n  <body>\n    <p>My camp is ready</p>\n  </body>\n</html>",
      },
      "regex": "<h1>\\s*Welcome to Base Camp\\s*</h1>[\\s\\S]*<p>\\s*Prepare yourself for the HTML adventure!\\s*</p>",
      "output": "<h1>Welcome to Base Camp</h1><p>Prepare yourself for the HTML adventure!</p>",
      "hintXp": 35,
    },
  },
  {
    "courseId": 2,
    "exerciseId": "name-your-world",
    "exerciseName": "Name Your World",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body><h2>Name Your World</h2><p>Every world needs a name.</p><p>In HTML, this name is the title.</p><p>The title appears in the browser tab.</p><p>It also helps search engines.</p><p>The <code>&lt;title&gt;</code> tag lives in the head.</p><p>Players see it before entering.</p><p>A good title describes the page.</p><p>It should be short and clear.</p><p>Never place title in the body.</p><p>This breaks the rules.</p><p>Keep structure clean.</p><p>Let’s name your world.</p></body>",
      "task": "<body><h3>Your Mission</h3><p>Add a <code>&lt;title&gt;</code> with your page name.</p></body>",
      "hint": "<body><p>The title tag must be inside <code>&lt;head&gt;</code>.</p></body>",
      "starterCode": {
        "/index.html": "<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Add title here -->\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>"
      },
      "regex": "(?i)<title>\\s*My Adventure World\\s*</title>",
      "output": "<title>My Adventure World</title>",
      "hintXp": 30
    },
  },
  {
    "courseId": 2,
    "exerciseId": "break-and-repair",
    "exerciseName": "Break & Repair",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body><h2>Break & Repair</h2><p>Every developer breaks things.</p><p>HTML errors are part of learning.</p><p>Missing closing tags confuse browsers.</p><p>Structure becomes unstable.</p><p>Your job is to fix it.</p><p>Think like a mechanic.</p><p>Open tags must be closed.</p><p>Nested tags must be in order.</p><p>This keeps logic clean.</p><p>Browsers try to guess errors.</p><p>But you should not rely on that.</p><p>Let’s repair the page.</p></body>",
      "task": "<body><h3>Your Mission</h3><p>Fix the broken HTML structure.</p><p>Close all opened tags correctly.</p></body>",
      "hint": "<body><p>Check indentation and matching tags.</p></body>",
      "starterCode": {
        "/index.html": "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Broken Page</title>\n  </head>\n  <body>\n    <h1>Oops\n    <p>This is broken\n  </body>\n</html>"
      },
      "regex": "<h1>\\s*Fortress Repaired\\s*</h1>[\\s\\S]*<p>\\s*Your castle is strong again!\\s*</p>",
      "output": "<h1>Fortress Repaired</h1><p>Your castle is strong again!</p>",
      "hintXp": 40
    },
  },
  {
    "courseId": 2,
    "exerciseId": "html-detective",
    "exerciseName": "HTML Detective",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body><h2>HTML Detective</h2><p>You are now a code detective.</p><p>Your mission is to identify elements.</p><p>HTML uses tags to describe content.</p><p>Headings, paragraphs, and more.</p><p>Each tag has a purpose.</p><p>Like clues in a mystery.</p><p>Correct tags improve readability.</p><p>They help browsers and users.</p><p>Wrong tags confuse meaning.</p><p>Detectives observe carefully.</p><p>Now inspect the content.</p><p>Choose the right elements.</p></body>",
      "task": "<body><h3>Your Mission</h3><p>Replace generic tags with correct HTML elements.</p></body>",
      "hint": "<body><p>Use <code>&lt;h1&gt;</code> for main titles and <code>&lt;p&gt;</code> for text.</p></body>",
      "starterCode": {
        "/index.html": "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Detective</title>\n  </head>\n  <body>\n    <div>My Title</div>\n    <div>Some text here</div>\n  </body>\n</html>"
      },
      "regex": "<h1>\\s*Detective Mode\\s*</h1>[\\s\\S]*<p>\\s*All HTML errors are found!\\s*</p>",
      "output": "<h1>Detective Mode</h1><p>All HTML errors are found!</p>",
      "hintXp": 45
    },
  },
  {
    "courseId": 2,
    "exerciseId": "element-collector",
    "exerciseName": "Element Collector",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body><h2>Element Collector</h2><p>Time to collect elements.</p><p>Each HTML tag is a collectible.</p><p>The more you know, the stronger you get.</p><p>Headings show importance.</p><p>Paragraphs explain ideas.</p><p>Lists organize information.</p><p>HTML is simple but powerful.</p><p>Correct usage builds skill.</p><p>Think like a collector.</p><p>Choose elements wisely.</p><p>Your collection starts now.</p><p>Let’s gather them.</p></body>",
      "task": "<body><h3>Your Mission</h3><p>Add one heading, one paragraph, and one list.</p></body>",
      "hint": "<body><p>Use <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> for lists.</p></body>",
      "starterCode": {
      "/index.html":"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Collector</title>\n  </head>\n  <body>\n    <!-- Collect elements here -->\n  </body>\n</html>"
      },
      "regex": "<h1>\\s*Element Collection\\s*</h1>[\\s\\S]*<p>\\s*Gather all HTML trasures!\\s*</p>[\\s\\S]*<li>\\s*Headings\\s*</li>[\\s\\S]*<li>\\s*Paragraphs\\s*</li>[\\s\\S]*<li>\\s*Links\\s*</li>",
      "output": "<h1>Element Collection</h1><p>Gather all HTML trasures!</p><ul><li>Headings</li><li>Paragraphs</li><li>Links</li></ul>",
      "hintXp": 50
    },
  }
];

export async function GET(req: NextRequest) {
  DATA.forEach(async (item) => {
    await db.insert(exerciseTable).values({
      courseId: item?.courseId,
      chapterId: item?.chapterId,
      exerciseId: item?.exerciseId,
      exercisesContent: item?.exercisesContent,
      exerciseName: item?.exerciseName,
    })
  })

  return NextResponse.json('Success')
}
