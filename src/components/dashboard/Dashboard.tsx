'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TaskList from '@/components/tasks/TaskList'
import CreateTaskForm from '@/components/tasks/CreateTaskForm'
import UserManagement from '@/components/users/UserManagement'
import { Plus, Users, CheckSquare } from 'lucide-react'

export default function Dashboard() {
  const { user, isAdmin } = useAuth()
  const [activeTab, setActiveTab] = useState<'tasks' | 'create' | 'users'>('tasks')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
              <p className="text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setActiveTab('tasks')}>
                <CheckSquare className="w-4 h-4 mr-2" />
                My Tasks
              </Button>
              <Button variant="outline" onClick={() => setActiveTab('create')}>
                <Plus className="w-4 h-4 mr-2" />
                Create Task
              </Button>
              {isAdmin && (
                <Button variant="outline" onClick={() => setActiveTab('users')}>
                  <Users className="w-4 h-4 mr-2" />
                  User Management
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {activeTab === 'tasks' && (
            <Card>
              <CardHeader>
                <CardTitle>My Tasks</CardTitle>
                <CardDescription>
                  Manage and track your tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TaskList />
              </CardContent>
            </Card>
          )}

          {activeTab === 'create' && (
            <Card>
              <CardHeader>
                <CardTitle>Create New Task</CardTitle>
                <CardDescription>
                  Add a new task to your list
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CreateTaskForm />
              </CardContent>
            </Card>
          )}

          {activeTab === 'users' && isAdmin && (
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage users and their permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UserManagement />
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

