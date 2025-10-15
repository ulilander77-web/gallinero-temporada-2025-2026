import { execSync } from 'child_process'

try {
  execSync('npx prisma migrate dev', { stdio: 'inherit' })
  execSync('npm run seed', { stdio: 'inherit' })
  console.log('Base de datos lista y poblada!')
} catch (err) {
  console.error('Error preparando la base de datos:', err)
}
