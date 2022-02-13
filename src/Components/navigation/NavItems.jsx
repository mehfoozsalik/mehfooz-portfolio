import React from "react"
import { NavLink } from "react-router-dom"

function NavItems(props) {
  return (
    <div className='navigation-items-container'>
      <nav>
        <ul className='nav-link-unorder'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? "Nav-link-container Nav-link-container-active"
                : "Nav-link-container"
            }>
            <div className='nav-link-icon'>
              <li>HOME</li>
              <svg
                width='26'
                height='22'
                viewBox='0 0 26 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12.6553 5.70738L4.33368 13.1651V21.2142C4.33368 21.4226 4.40976 21.6225 4.54519 21.7698C4.68063 21.9172 4.86431 22 5.05584 22L10.1137 21.9858C10.3046 21.9847 10.4874 21.9015 10.622 21.7542C10.7567 21.607 10.8323 21.4077 10.8323 21.2V16.4994C10.8323 16.291 10.9084 16.0911 11.0438 15.9437C11.1792 15.7964 11.3629 15.7136 11.5544 15.7136H14.4431C14.6346 15.7136 14.8183 15.7964 14.9538 15.9437C15.0892 16.0911 15.1653 16.291 15.1653 16.4994V21.1965C15.165 21.2999 15.1834 21.4024 15.2196 21.498C15.2558 21.5936 15.3089 21.6805 15.376 21.7538C15.4431 21.827 15.5228 21.8851 15.6106 21.9247C15.6983 21.9644 15.7924 21.9848 15.8874 21.9848L20.9435 22C21.135 22 21.3187 21.9172 21.4542 21.7698C21.5896 21.6225 21.6657 21.4226 21.6657 21.2142V13.1597L13.3459 5.70738C13.2481 5.62159 13.1262 5.57481 13.0006 5.57481C12.8749 5.57481 12.7531 5.62159 12.6553 5.70738ZM25.8001 10.7763L22.0268 7.39194V0.589351C22.0268 0.433046 21.9697 0.283142 21.8681 0.172617C21.7665 0.0620923 21.6288 0 21.4851 0H18.9575C18.8139 0 18.6761 0.0620923 18.5746 0.172617C18.473 0.283142 18.4159 0.433046 18.4159 0.589351V4.15542L14.3749 0.537783C13.9872 0.190547 13.5005 0.000694131 12.9983 0.000694131C12.4961 0.000694131 12.0095 0.190547 11.6217 0.537783L0.196564 10.7763C0.141719 10.8256 0.0963433 10.8862 0.0630297 10.9546C0.0297162 11.023 0.0091177 11.0979 0.0024112 11.175C-0.00429529 11.2521 0.00302166 11.3299 0.023944 11.4039C0.0448663 11.4779 0.0789839 11.5466 0.124347 11.6063L1.2753 13.1288C1.32054 13.1886 1.37619 13.2382 1.43905 13.2746C1.50192 13.3111 1.57077 13.3336 1.64166 13.3411C1.71256 13.3485 1.7841 13.3407 1.8522 13.318C1.92031 13.2953 1.98363 13.2582 2.03854 13.2088L12.6553 3.69376C12.7531 3.60797 12.8749 3.56119 13.0006 3.56119C13.1262 3.56119 13.2481 3.60797 13.3459 3.69376L23.9631 13.2088C24.0179 13.2582 24.0811 13.2953 24.1491 13.3181C24.2171 13.3409 24.2886 13.3488 24.3594 13.3415C24.4303 13.3342 24.4991 13.3118 24.562 13.2756C24.6248 13.2393 24.6805 13.1899 24.7259 13.1303L25.8768 11.6078C25.9221 11.5478 25.9561 11.4786 25.9768 11.4043C25.9974 11.33 26.0044 11.2519 25.9973 11.1747C25.9902 11.0974 25.9691 11.0224 25.9352 10.9541C25.9014 10.8857 25.8554 10.8253 25.8001 10.7763Z'
                  fill='white'
                />
              </svg>
            </div>
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? "Nav-link-container Nav-link-container-active"
                : "Nav-link-container"
            }>
            <div className='nav-link-icon'>
              <li>ABOUT</li>
              <svg
                width='22'
                height='24'
                viewBox='0 0 22 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11 12C14.4719 12 17.2857 9.31406 17.2857 6C17.2857 2.68594 14.4719 0 11 0C7.52812 0 4.71429 2.68594 4.71429 6C4.71429 9.31406 7.52812 12 11 12ZM15.4 13.5H14.5799C13.4897 13.9781 12.2768 14.25 11 14.25C9.72321 14.25 8.51518 13.9781 7.42009 13.5H6.6C2.95625 13.5 0 16.3219 0 19.8V21.75C0 22.9922 1.0558 24 2.35714 24H19.6429C20.9442 24 22 22.9922 22 21.75V19.8C22 16.3219 19.0437 13.5 15.4 13.5Z'
                  fill='#FAFAFA'
                />
              </svg>
            </div>
          </NavLink>
          <NavLink
            to='/portfolio'
            className={({ isActive }) =>
              isActive
                ? "Nav-link-container Nav-link-container-active"
                : "Nav-link-container"
            }>
            <div className='nav-link-icon'>
              <li>Portfolio</li>
              <svg
                width='24'
                height='22'
                viewBox='0 0 24 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15 14.9286C15 15.3627 14.6644 15.7143 14.25 15.7143H9.75C9.33562 15.7143 9 15.3627 9 14.9286V12.5714H0V19.6429C0 20.9 1.05 22 2.25 22H21.75C22.95 22 24 20.9 24 19.6429V12.5714H15V14.9286ZM21.75 4.71429H18V2.35714C18 1.1 16.95 0 15.75 0H8.25C7.05 0 6 1.1 6 2.35714V4.71429H2.25C1.05 4.71429 0 5.81429 0 7.07143V11H24V7.07143C24 5.81429 22.95 4.71429 21.75 4.71429ZM15 4.71429H9V3.14286H15V4.71429Z'
                  fill='white'
                />
              </svg>
            </div>
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive
                ? "Nav-link-container Nav-link-container-active"
                : "Nav-link-container"
            }>
            <div className='nav-link-icon'>
              <li>Contact</li>
              <svg
                width='26'
                height='18'
                viewBox='0 0 26 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M23.5556 0H6.44446C5.09634 0 4.00001 1.0764 4.00001 2.4V8C4.00001 8 4.00025 8 4.00001 8.5C3.99977 9 3.99977 9 4.50001 9C5.00025 9 5.00001 9 5.00001 9C5.00001 9 5.00025 9 5.50001 9C5.99977 9 5.99977 9 6.00001 8.5C6.00026 8 6.00001 8 6.00001 8V4L14.2667 10.56C14.4783 10.7156 14.7356 10.7997 15 10.7997C15.2644 10.7997 15.5217 10.7156 15.7333 10.56L24 4V16H15H6.00001C6.00001 16 14.9998 16 14.4998 16C13.9998 16 14 16 14 16.5C14 17 14 17 14 17C14 17 14 17 14 17.5C14 18 13.9998 18 14.4998 18C14.9998 18 6.00001 18 6.00001 18H15H23.5556C24.9037 18 26 16.9236 26 15.6V2.4C26 1.0764 24.9037 0 23.5556 0Z'
                  fill='white'
                />
                <rect y='10' width='9' height='2' rx='0.2' fill='white' />
                <rect x='2' y='13' width='9' height='2' rx='0.2' fill='white' />
                <rect x='5' y='16' width='8' height='2' rx='0.2' fill='white' />
              </svg>
            </div>
          </NavLink>
          <NavLink
            to='/blogs'
            className={({ isActive }) =>
              isActive
                ? "Nav-link-container Nav-link-container-active"
                : "Nav-link-container"
            }>
            <div className='nav-link-icon'>
              <li>Blogs</li>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6.94737 0C5.10481 0 3.33772 0.731953 2.03484 2.03484C0.731953 3.33772 0 5.10481 0 6.94737V15.0526C0 16.8952 0.731953 18.6623 2.03484 19.9652C3.33772 21.268 5.10481 22 6.94737 22H15.0526C16.8952 22 18.6623 21.268 19.9652 19.9652C21.268 18.6623 22 16.8952 22 15.0526V9.26316C22 8.95607 21.878 8.66155 21.6609 8.4444C21.4437 8.22726 21.1492 8.10526 20.8421 8.10526H19.6842C19.3771 8.10526 19.0826 7.98327 18.8655 7.76612C18.6483 7.54898 18.5263 7.25446 18.5263 6.94737C18.5263 5.10481 17.7944 3.33772 16.4915 2.03484C15.1886 0.731953 13.4215 0 11.5789 0H6.94737ZM6.94737 5.78947H11.5789C12.2158 5.78947 12.7368 6.31053 12.7368 6.94737C12.7368 7.58421 12.2158 8.10526 11.5789 8.10526H6.94737C6.31053 8.10526 5.78947 7.58421 5.78947 6.94737C5.78947 6.31053 6.31053 5.78947 6.94737 5.78947ZM6.94737 13.8947H15.0526C15.6895 13.8947 16.2105 14.4158 16.2105 15.0526C16.2105 15.6895 15.6895 16.2105 15.0526 16.2105H6.94737C6.31053 16.2105 5.78947 15.6895 5.78947 15.0526C5.78947 14.4158 6.31053 13.8947 6.94737 13.8947Z'
                  fill='#FAFAFA'
                />
              </svg>
            </div>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default NavItems