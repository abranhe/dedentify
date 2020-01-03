import { expectType } from 'tsd';
import dedentify = require('.');

expectType<String>(dedentify`Awesome`);
expectType<String>(dedentify('Awesome'));
expectType<String>(dedentify(String.raw`Awesome`));