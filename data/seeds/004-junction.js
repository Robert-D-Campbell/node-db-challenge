exports.seed = function(knex) {
  // Inserts seed entries
  return knex("junction").insert([
    { project_id: 1, resource_id: 1, task_id: 1 },
    { project_id: 1, resource_id: 3, task_id: 2 },
    { project_id: 1, resource_id: 2, task_id: 1 },
    { project_id: 2, resource_id: 1, task_id: 1 },
    { project_id: 2, resource_id: 3, task_id: 2 },
    { project_id: 2, resource_id: 2, task_id: 1 }
  ]);
};
