# TypeScrip trabalha com dois modos, o Script mode e o module mode:
https://github.com/microsoft/TypeScript/issues/27893

## Gleaning the docs, it looks like TSC parses files in either Module Mode or Script Mode. From the docs and from playing around with TS-

- If a file has at least one import, export, or export =, TSC typechecks the file in Module Mode
- Otherwise, TSC typechecks the file in Script Mode

## The differences seem to be that in Script Mode:

- You can directly consume globals exported by UMD modules (export namespace as)
- You can declare globals, that are then available in other files in the project without an explicit import. There seem to be a few ways to do that:
  1. let a = 1, let a: 1, or declare let a: 1 in a .ts file
  2. declare let a: 1 in a .d.ts file

## In Module Mode:

- You can't use globals exported from UMD modules, and instead have to explicitly import the UMD module's exports
- You can declare globals, that are then available in the current file only (not in other files):
  1. let a = 1, let a: 1, or declare let a: 1 in a .ts file
  2. declare let a: 1 in a .d.ts file

Are there any other differences, and are there any TSC flags that affect this behavior? I can't find anything else covering this in the spec or the docs.

## Obs.:
  Basicamente o Script Mode é um escopo global do Type Script que é reconhecido pela falta de um export no arquivo; toda declaração, seja de função ou variável, será tratada além do escopo do arquivo.