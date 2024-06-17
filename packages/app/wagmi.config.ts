import { defineConfig } from '@wagmi/cli'
import { actions, hardhat } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/abis.ts',
  contracts: [],
  plugins: [
    actions(),
    hardhat({
      project: '../smartcontracts',
      deployments: {
        ARAToken: {
          59141: '0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f', // WEF Linea (DAO of FrogWars)
        },
        ProjectCheckToken: {
          59141: '0x0011764BfeeB78859dD044023AF6b6b6e17715f7', // FrogWars check token
        },
        ProjectMainToken: {
          59141: '0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a', // FrogWars main token
        },
      },
    }),
  ],
})
