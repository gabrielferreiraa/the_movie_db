const data = {
  menus: [
    { id: 1, text: 'Página Inicial', icon: 'dashboard', link: '/dashboard', 'parent': false, 'parent_id': '' },
    { id: 2, text: 'Participantes', icon: 'face', link: '/participants', 'parent': false, 'parent_id': '' },
    { id: 3, text: 'Agendamentos', icon: 'schedule', link: '/schedules', 'parent': false, 'parent_id': '' }
  ],
  participants: [
    { id: 1, name: 'Gabriel', 'role': 'Frontend', 'status': 1 },
    { id: 2, name: 'Tonho', 'role': 'Backend', 'status': 0 },
    { id: 3, name: 'Carlos', 'role': 'Analista', 'status': 1 },
    { id: 4, name: 'Rodrigo', 'role': 'Gerente', 'status': 1 },
    { id: 5, name: 'José', 'role': 'CEO', 'status': 0 }
  ]
};

export default data;
