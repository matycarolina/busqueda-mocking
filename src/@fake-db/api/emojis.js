import mock from '../mock';
import { data } from '../db/emojis';

mock.onGet('/api/emojis/list/all-data').reply(200, data.emojis);
