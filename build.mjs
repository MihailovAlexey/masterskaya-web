import {cpSync,rmSync} from 'node:fs';
rmSync('dist',{force:true,recursive:true});
cpSync('web','dist',{recursive:true});
