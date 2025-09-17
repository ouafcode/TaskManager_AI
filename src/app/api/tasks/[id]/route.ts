import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { status, title, description, priority, dueDate } = await request.json()

    // Check if task exists and belongs to user
    const existingTask = await prisma.task.findFirst({
      where: {
        id: params.id,
        userId: session.user.id
      }
    })

    if (!existingTask) {
      return NextResponse.json(
        { message: 'Task not found' },
        { status: 404 }
      )
    }

    const updateData: any = {}
    if (status) updateData.status = status
    if (title) updateData.title = title
    if (description !== undefined) updateData.description = description
    if (priority) updateData.priority = priority
    if (dueDate) updateData.dueDate = new Date(dueDate)

    const task = await prisma.task.update({
      where: { id: params.id },
      data: updateData
    })

    return NextResponse.json(task)
  } catch (error) {
    console.error('Failed to update task:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    // Check if task exists and belongs to user
    const existingTask = await prisma.task.findFirst({
      where: {
        id: params.id,
        userId: session.user.id
      }
    })

    if (!existingTask) {
      return NextResponse.json(
        { message: 'Task not found' },
        { status: 404 }
      )
    }

    await prisma.task.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Task deleted successfully' })
  } catch (error) {
    console.error('Failed to delete task:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
