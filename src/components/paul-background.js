import React from "react"
import "./styles/global.css"
import { StaticImage } from "gatsby-plugin-image"

export default function PaulBackground() {
  return (
    <div class="bg-purple-100 min-h-0 flex items-center justify-center px-16">
      <div class="relative w-full max-w-lg">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <StaticImage src="../images/paul-oil.png" placeholder="blurred" />
        
          <div class="grid items-start justify-center">
            <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-red-900 to-yellow-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button class="relative py-2 w-80 md:w-96 bg-purple-900 rounded-lg leading-none ">
                
                <span class="font-bold text-yellow-300 text-xs group-hover:text-white transition duration-200">
                  Hate Censorhip? Want Your Own Platform? &rarr;
                </span>
              </button>
            </div>
          </div>
      
   
      </div>
    </div>
  )
}

