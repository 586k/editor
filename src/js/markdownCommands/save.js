import CommandManager from '../commandManager';

const Save = CommandManager.command('markdown', {
  name: 'Strike',
  keyMap: ['CTRL+S', 'META+S'],
  exec() {
    alert('save');
  }
});

export default Save;
