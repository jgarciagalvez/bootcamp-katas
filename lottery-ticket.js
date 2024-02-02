function checkLottery(ticketNumber, winningTicket) {
    let message = 'Loser'
    if (ticketNumber === winningTicket) {
        message = 'Winner'
    }
    return message
}