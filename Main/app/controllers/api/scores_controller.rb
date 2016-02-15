class Api::ScoresController < ApplicationController

  def index
  end

  if params[:search]
      search_term = params[:search]
      scores = Score.where("admin ILIKE ?", "%#{search_term}%")
  end
  render json: {scores: scores}

end
