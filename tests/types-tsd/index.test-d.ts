import { expectNotAssignable, expectAssignable } from 'tsd';
import { ITeam } from '.';

expectNotAssignable<ITeam>(null);
expectAssignable<ITeam>({
  channels: [],
  iconUrl: '',
  id: '',
  name: '',
});
