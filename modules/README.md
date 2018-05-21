# Object Lifecycle

1. Create game (new Board, new Player)
2. Initialize game (board.initialPlacement)
3. Start game
  View -> Board -> Cell -> Piece(move) -> Record -> Board (sync record) -> View
4. Next turn
