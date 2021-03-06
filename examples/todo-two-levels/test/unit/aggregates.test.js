import commands from '../../common/aggregates/todo.commands'

describe('aggregates', () => {
  describe('Todo', () => {
    it('command "createList" should create an event to create a list', () => {
      const state = undefined
      const command = { payload: { title: 'title1' } }

      expect(commands.createList(state, command)).toEqual({
        type: 'LIST_CREATED',
        payload: { title: command.payload.title }
      })
    })

    it('command "removeList" should create an event to remove the list', () => {
      const state = undefined
      const command = {}

      expect(commands.removeList(state, command)).toEqual({
        type: 'LIST_REMOVED'
      })
    })

    it('command "createItem" should create an event to create a item', () => {
      const state = undefined
      const command = { payload: { id: 'id', text: 'text' } }

      expect(commands.createItem(state, command)).toEqual({
        type: 'ITEM_CREATED',
        payload: { id: command.payload.id, text: command.payload.text }
      })
    })

    it('command "toggleItem" should create an event to toggle the item', () => {
      const state = undefined
      const command = { payload: { id: 'id' } }

      expect(commands.toggleItem(state, command)).toEqual({
        type: 'ITEM_TOGGLED',
        payload: { id: command.payload.id }
      })
    })

    it('command "removeItem" should create an event to remove the item', () => {
      const state = undefined
      const command = { payload: { id: 'id' } }

      expect(commands.removeItem(state, command)).toEqual({
        type: 'ITEM_REMOVED',
        payload: { id: command.payload.id }
      })
    })
  })
})
