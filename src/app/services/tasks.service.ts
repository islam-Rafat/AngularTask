import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = []

  constructor() {
    let savedtasks =  localStorage.getItem('tasks')
    if (savedtasks) this.tasks = JSON.parse(savedtasks)
    else this.tasks = []
   }

  deleteTask(i) {
    this.tasks.splice(i , 1)
    this.saveAll()
  }
  saveTask(title , description) {
    this.tasks.push({
     title,
     description 
    })
    this.saveAll()
  }
    editTask(i , data) {
      this.tasks[i] = data
      this.saveAll()
    }
    saveAll(){
      localStorage.setItem('tasks' , JSON.stringify(this.tasks))
    }
  




}

