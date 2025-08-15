// src/GitClient.test.js
import axios from 'axios';
import GitClient from './GitClient';
jest.mock('axios');

test('should return repository names for techiesyed', async () => {
  const fake = [{name:'repo-one'},{name:'repo-two'}];
  axios.get.mockResolvedValue({ data: fake });

  const names = await GitClient.getRepositories('techiesyed');

  expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  expect(names).toEqual(['repo-one','repo-two']);
});
