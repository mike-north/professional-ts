import { ITeam } from '../../src/types';
import {expectNotAssignable, expectAssignable} from "tsd";

expectNotAssignable<ITeam>(null);
expectAssignable<ITeam>({id:"",channels:[],iconUrl:"",name:""});
