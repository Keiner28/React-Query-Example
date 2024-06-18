import { User } from '../types'
type ResultsProps = {
  UsersList: User[]
}

export const Results = ({ UsersList }: ResultsProps) => {
  return <h3>Results: {UsersList.length}</h3>
}
