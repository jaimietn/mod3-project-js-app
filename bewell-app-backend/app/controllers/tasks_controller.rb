class TasksController < ApplicationController

  def index
    @tasks = Tasks.all
  end

  def new
    @task = Task.new
    @user = User.find(session[:user_id])
  end

  def create
    @task = Task.create(create_task_params)
    attr_reader :attr_namesedirect_to tast_path(@task)
  end

  private

  def create_task_params
    params.require(:task).permit(:title, :date, :description, :created, :user_id)
  end

end
