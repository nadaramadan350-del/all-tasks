import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TeamMember {
  id: number;
  name: string;
  age: number;
  department: string;
  available: boolean;
}
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
 members: TeamMember[] = [
    {
      id: 1,
      name: 'Ahmed',
      age: 28,
      department: 'Development',
      available: true
    },
    {
      id: 2,
      name: 'Esraa',
      age: 24,
      department: 'Marketing',
      available: false
    },
    {
      id: 3,
      name: 'Omar',
      age: 26,
      department: 'Design',
      available: true
    }
  ];

  // Departments
  departments: string[] = [
    'Development',
    'Marketing',
    'Design'
  ];

  // Selected Department
  selectedDepartment: string = 'All';

  // Current View
  viewMode: string = 'card';

  // Form Data
  newMember: TeamMember = {
    id: 0,
    name: '',
    age: 0,
    department: 'Development',
    available: false
  };


  // Add Member
  addMember() {

    if (
      !this.newMember.name.trim() ||
      this.newMember.age <= 0 ||
      !this.newMember.department
    ) {
      alert('Please enter valid member data');
      return;
    }

    const member: TeamMember = {
      ...this.newMember,
      id: Date.now()
    };

    this.members.push(member);

    // Clear form
    this.newMember = {
      id: 0,
      name: '',
      age: 0,
      department: 'Development',
      available: false
    };
  }


  // Toggle Availability
  toggleAvailability(member: TeamMember) {
    member.available = !member.available;
  }


  // Filter Members
  get filteredMembers(): TeamMember[] {

    if (this.selectedDepartment === 'All') {
      return this.members;
    }

    return this.members.filter(
      member => member.department === this.selectedDepartment
    );
  }


}
