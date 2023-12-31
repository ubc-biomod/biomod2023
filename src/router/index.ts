import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const IdeasView = () => import('@/views/IdeasView.vue')
const TeamView = () => import('@/views/TeamView.vue')
const ELSIView = () => import('@/views/ELSIView.vue')
const SponsorsView = () => import('@/views/SponsorsView.vue')
const StructureDesignView = () => import('@/views/computational-simulation/StructureDesignView.vue')
const DockingDNASE = () => import('@/views/computational-simulation/DockingDNASE.vue')
const GroupAView = () => import('@/views/lab-validation/GroupAView.vue')
const GroupBView = () => import('@/views/lab-validation/GroupBView.vue')
const GroupCView = () => import('@/views/lab-validation/GroupCView.vue')
const OctadedronFormation = () => import('@/views/lab-validation/OctahedronFormation.vue')
const AADocking = () => import('@/views/future-directions/AADocking.vue')
const StructureImaging = () => import('@/views/future-directions/StructureImaging.vue')
const OctahedronLiposomeFormation = () =>
  import('@/views/future-directions/OctahedronLiposomeFormation.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 3am hack :))
  // @ts-ignore
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash
      }
    } else if (savedPosition) {
      return {
        top: savedPosition.top,
        behavior: 'instant'
      }
    } else {
      return {
        top: 0,
        behavior: 'instant'
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ideas',
      name: 'ideas',
      component: IdeasView
    },
    {
      path: '/elsi',
      name: 'elsi',
      component: ELSIView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: SponsorsView
    },
    {
      path: '/computational-simulation/structure-design',
      name: 'structure-design',
      component: StructureDesignView
    },
    {
      path: '/computational-simulation/docking-of-dnase-i',
      name: 'docking-of-dnase-i',
      component: DockingDNASE
    },
    {
      path: '/lab-validation/dnase-i',
      name: 'dnase-i',
      component: GroupAView
    },
    {
      path: '/lab-validation/liposome-formation',
      name: 'liposome-formation',
      component: GroupBView
    },
    {
      path: '/lab-validation/thiolation-and-conjugation',
      name: 'thiolation-and-conjugation',
      component: GroupCView
    },
    {
      path: '/lab-validation/octahedron-formation',
      name: 'octahedron-formation',
      component: OctadedronFormation
    },
    {
      path: '/future-directions/aa-docking',
      name: 'aa-docking',
      component: AADocking
    },
    {
      path: '/future-directions/structure-imaging',
      name: 'structure-imaging',
      component: StructureImaging
    },
    {
      path: '/future-directions/octahedron-liposome-formation',
      name: 'octahedron-liposome-formation',
      component: OctahedronLiposomeFormation
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404-not-found',
      component: NotFoundView
    }
  ]
})

export default router
