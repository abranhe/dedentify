/**
Dedenting Template Strings.

@param input - the template string to deindent
@returns deindented string

@example
```
import dedentify from 'dedentify';

dedentify`
   this
  is
 cool
`

// => `
this
is
cool
`
```
*/
declare function dedentify(input: string | TemplateStringsArray): string;

export = dedentify;