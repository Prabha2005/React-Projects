// src/GitClient.js
import axios from 'axios';

export default class GitClient {
  static async getRepositories(username) {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);
    return res.data.map(r => r.name);
  }
}
