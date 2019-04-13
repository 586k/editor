import CommandManager from '../commandManager';

const Save = CommandManager.command('wysiwyg', {
  name: 'Strike',
  keyMap: ['CTRL+S', 'META+S'],
  exec() {
    alert('save');
  }
});

export default Save;
