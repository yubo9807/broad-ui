import { defineStore } from 'pl-vue/lib/store';

const KEY = 'isPlVue';
const state = {
  isPlVue: [null, 'true'].includes(localStorage.getItem(KEY))
}

const actions = {
  setIsPlVue(bool: boolean) {
    localStorage.setItem(KEY, bool+'');
    location.reload();
  }
}

export default defineStore({ state, actions });