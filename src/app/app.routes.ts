import { ActivatedRoute, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { ChildComponent } from './routing/child/child.component';
import { ParentComponent } from './routing/parent/parent.component';
import { inject } from '@angular/core';
import { StudentProService } from './student-pro/student-pro.service';
import { StudentParentDetailComponent } from './routing/parent/student-parent/detail/student-parent-detail.component';
import { StudentParentComponent } from './routing/parent/student-parent/student.parent.component';
import { StudentHeaderComponent } from './routing/parent/student-parent/header/student-header.component';

export const routes: Routes = [
    //Default redirect ve parent khi path rong
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'parent'
    },
    {
        path: 'child',
        component: ChildComponent,
    },
    {
        path: 'parent',
        component: ParentComponent,
        children: [
            {
                path: 'students',
                component: StudentParentComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: ''
                    },
                    {
                        path: '',
                        component: StudentHeaderComponent,
                        // Resolver
                        resolve: {
                            // Can 2 hoac nhieu API thi sao
                            students: () => inject(StudentProService).getStudents()
                            // forkJoin
                        },
                    },
                    {
                        path: ':id',
                        component: StudentParentDetailComponent,
                        resolve: {
                            student: (activatedRoute: ActivatedRouteSnapshot) => inject(StudentProService).getStudentById(activatedRoute.params['id'])
                        }
                    }
                ]
            }
        ]
    }
];
