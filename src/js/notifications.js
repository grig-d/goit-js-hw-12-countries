import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, error, notice, success } from '@pnotify/core';
defaults.styling = 'material';
defaults.icons = 'material';
defaults.width = '400px';
defaults.delay = 1000;

function notify(messageType) {
  if (messageType === 'success') {
    return success({ text: 'Search completed successfully!' });
  }
  if (messageType === 'notice') {
    return notice({ text: 'Please, specify your request' });
  }
  if (messageType === 'error') {
    return error({ text: 'Sorry, incorrect request' });
  }
}

export default notify;
