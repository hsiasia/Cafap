/**
 * use for defferent components to communicate, 
 * ex: Vue1 (by boardcast, distribution), but now is more recommended by event bus  
 */
import Vue from 'vue';
export const EventBus = new Vue();