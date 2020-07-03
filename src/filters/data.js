import Vue from 'vue';
import moment from 'moment';

Vue.filter('dateFilter', (value) => moment(value).format('DD/MM/YYYY'));
