# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## API which has information about the restaurants and their menu location and everything
https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING


## Need testing permission from API owner 
** it took me long time to solve this problem cors permission help me to take permission
proxyServer = 'https://cors-anywhere.herokuapp.com/'

** To display data need permission for demo server
https://cors-anywhere.herokuapp.com/corsdemo


## API which has information about the  individual restaurant and its food details
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=8614&catalog_qa=undefined&submitAction=ENTER


https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=16865&catalog_qa=undefined&submitAction=ENTER

https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=26719&catalog_qa=undefined&submitAction=ENTER

## data drilling so complecated it is time taking 

## Chanllenges 
data filtering is tough task to handle it blow my mind
while fetching the price it took me way far to understand the issue
<!-- <p >{"₹"+ ("defaultPrice" in restData?restData.defaultPrice/100:restData.price/100)}</p> -->

1. when i route to another screen previous looses all the values to resolve this 
i used the centeralised data from the store i have a key naming quantity which helps to get the exact number of orders of a particular dish which helps me to not undo the state after or before routing from one to another components 

2.this resolve the issue of recommendation count and individual count problem too.

## search API


https://www.swiggy.com/dapi/menu/pl/search?lat=28.63270&lng=77.21980&restaurantId=8614&isMenuUx4=true&query=ta&submitAction=ENTER