import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTask'
})
export class UserTaskFilterPipe implements PipeTransform {

  transform(tasks: any[], filter: string): any[] {
    if (!tasks) return [];
    if (!filter) return tasks;
    
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filter === 'incomplete') {
      return tasks.filter(task => !task.completed);
    } else {
      return tasks;
    }
  }

}
