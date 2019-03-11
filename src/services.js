let mockDB = [{id: 0, created_date: Date.now()}];

const services = {
  list: function() {
    if (localStorage.ideas) {
      mockDB = JSON.parse(localStorage.getItem("ideas"));
    }
    return mockDB;
  },
  create: function() {
    mockDB.push({
      id: mockDB[mockDB.length-1].id+1,
      created_date: Date.now()
    });
    this.sync();
    return mockDB[mockDB.length-1];
  },
  update: function(newIdea) {
    mockDB = [
      ...mockDB.filter(idea => idea.id < newIdea.id),
      newIdea,
      ...mockDB.filter(idea => idea.id > newIdea.id)
    ];
    this.sync();
    return newIdea;
  },
  delete: function(ideaId) {
    mockDB = mockDB.filter(item => item.id != ideaId);
    this.sync();
    return {id: ideaId};
  },
  sync: function() {
    localStorage.setItem('ideas', JSON.stringify(mockDB));
  }
};

export default services;
