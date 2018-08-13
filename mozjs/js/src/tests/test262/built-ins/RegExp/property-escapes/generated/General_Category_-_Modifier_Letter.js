// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Modifier_Letter`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v10.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0002EC,
    0x0002EE,
    0x000374,
    0x00037A,
    0x000559,
    0x000640,
    0x0007FA,
    0x00081A,
    0x000824,
    0x000828,
    0x000971,
    0x000E46,
    0x000EC6,
    0x0010FC,
    0x0017D7,
    0x001843,
    0x001AA7,
    0x001D78,
    0x002071,
    0x00207F,
    0x002D6F,
    0x002E2F,
    0x003005,
    0x00303B,
    0x00A015,
    0x00A60C,
    0x00A67F,
    0x00A770,
    0x00A788,
    0x00A9CF,
    0x00A9E6,
    0x00AA70,
    0x00AADD,
    0x00FF70
  ],
  ranges: [
    [0x0002B0, 0x0002C1],
    [0x0002C6, 0x0002D1],
    [0x0002E0, 0x0002E4],
    [0x0006E5, 0x0006E6],
    [0x0007F4, 0x0007F5],
    [0x001C78, 0x001C7D],
    [0x001D2C, 0x001D6A],
    [0x001D9B, 0x001DBF],
    [0x002090, 0x00209C],
    [0x002C7C, 0x002C7D],
    [0x003031, 0x003035],
    [0x00309D, 0x00309E],
    [0x0030FC, 0x0030FE],
    [0x00A4F8, 0x00A4FD],
    [0x00A69C, 0x00A69D],
    [0x00A717, 0x00A71F],
    [0x00A7F8, 0x00A7F9],
    [0x00AAF3, 0x00AAF4],
    [0x00AB5C, 0x00AB5F],
    [0x00FF9E, 0x00FF9F],
    [0x016B40, 0x016B43],
    [0x016F93, 0x016F9F],
    [0x016FE0, 0x016FE1]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Modifier_Letter}+$/u,
  matchSymbols,
  "\\p{General_Category=Modifier_Letter}"
);
testPropertyEscapes(
  /^\p{General_Category=Lm}+$/u,
  matchSymbols,
  "\\p{General_Category=Lm}"
);
testPropertyEscapes(
  /^\p{gc=Modifier_Letter}+$/u,
  matchSymbols,
  "\\p{gc=Modifier_Letter}"
);
testPropertyEscapes(
  /^\p{gc=Lm}+$/u,
  matchSymbols,
  "\\p{gc=Lm}"
);
testPropertyEscapes(
  /^\p{Modifier_Letter}+$/u,
  matchSymbols,
  "\\p{Modifier_Letter}"
);
testPropertyEscapes(
  /^\p{Lm}+$/u,
  matchSymbols,
  "\\p{Lm}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x0002ED
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0002AF],
    [0x0002C2, 0x0002C5],
    [0x0002D2, 0x0002DF],
    [0x0002E5, 0x0002EB],
    [0x0002EF, 0x000373],
    [0x000375, 0x000379],
    [0x00037B, 0x000558],
    [0x00055A, 0x00063F],
    [0x000641, 0x0006E4],
    [0x0006E7, 0x0007F3],
    [0x0007F6, 0x0007F9],
    [0x0007FB, 0x000819],
    [0x00081B, 0x000823],
    [0x000825, 0x000827],
    [0x000829, 0x000970],
    [0x000972, 0x000E45],
    [0x000E47, 0x000EC5],
    [0x000EC7, 0x0010FB],
    [0x0010FD, 0x0017D6],
    [0x0017D8, 0x001842],
    [0x001844, 0x001AA6],
    [0x001AA8, 0x001C77],
    [0x001C7E, 0x001D2B],
    [0x001D6B, 0x001D77],
    [0x001D79, 0x001D9A],
    [0x001DC0, 0x002070],
    [0x002072, 0x00207E],
    [0x002080, 0x00208F],
    [0x00209D, 0x002C7B],
    [0x002C7E, 0x002D6E],
    [0x002D70, 0x002E2E],
    [0x002E30, 0x003004],
    [0x003006, 0x003030],
    [0x003036, 0x00303A],
    [0x00303C, 0x00309C],
    [0x00309F, 0x0030FB],
    [0x0030FF, 0x00A014],
    [0x00A016, 0x00A4F7],
    [0x00A4FE, 0x00A60B],
    [0x00A60D, 0x00A67E],
    [0x00A680, 0x00A69B],
    [0x00A69E, 0x00A716],
    [0x00A720, 0x00A76F],
    [0x00A771, 0x00A787],
    [0x00A789, 0x00A7F7],
    [0x00A7FA, 0x00A9CE],
    [0x00A9D0, 0x00A9E5],
    [0x00A9E7, 0x00AA6F],
    [0x00AA71, 0x00AADC],
    [0x00AADE, 0x00AAF2],
    [0x00AAF5, 0x00AB5B],
    [0x00AB60, 0x00DBFF],
    [0x00E000, 0x00FF6F],
    [0x00FF71, 0x00FF9D],
    [0x00FFA0, 0x016B3F],
    [0x016B44, 0x016F92],
    [0x016FA0, 0x016FDF],
    [0x016FE2, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Modifier_Letter}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Modifier_Letter}"
);
testPropertyEscapes(
  /^\P{General_Category=Lm}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Lm}"
);
testPropertyEscapes(
  /^\P{gc=Modifier_Letter}+$/u,
  nonMatchSymbols,
  "\\P{gc=Modifier_Letter}"
);
testPropertyEscapes(
  /^\P{gc=Lm}+$/u,
  nonMatchSymbols,
  "\\P{gc=Lm}"
);
testPropertyEscapes(
  /^\P{Modifier_Letter}+$/u,
  nonMatchSymbols,
  "\\P{Modifier_Letter}"
);
testPropertyEscapes(
  /^\P{Lm}+$/u,
  nonMatchSymbols,
  "\\P{Lm}"
);

reportCompare(0, 0);