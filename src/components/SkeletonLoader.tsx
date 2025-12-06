'use client'

// Skeleton loading components for better perceived performance

export const CardSkeleton = () => (
  <div className="glass rounded-3xl p-6 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
  </div>
)

export const StatSkeleton = () => (
  <div className="glass rounded-2xl p-6 animate-pulse">
    <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4"></div>
    <div className="h-8 bg-gray-200 rounded w-20 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-32"></div>
  </div>
)

export const TableRowSkeleton = () => (
  <div className="flex items-center gap-4 p-4 animate-pulse">
    <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
    </div>
    <div className="w-20 h-8 bg-gray-200 rounded"></div>
  </div>
)

export const BlogCardSkeleton = () => (
  <div className="glass rounded-3xl overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200"></div>
    <div className="p-6 space-y-4">
      <div className="h-3 bg-gray-200 rounded w-20"></div>
      <div className="h-5 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="flex justify-between pt-4">
        <div className="h-3 bg-gray-200 rounded w-24"></div>
        <div className="h-3 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
  </div>
)

export const DashboardSkeleton = () => (
  <div className="space-y-8">
    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <StatSkeleton key={i} />
      ))}
    </div>

    {/* Tools Grid */}
    <div>
      <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
)

export const LoadingSpinner = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    className="animate-spin"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
)

export const LoadingOverlay = ({ message = 'Loading...' }: { message?: string }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="glass rounded-3xl p-8 flex flex-col items-center gap-4 max-w-sm">
      <LoadingSpinner size={48} color="#4A4FFF" />
      <p className="text-lg font-bold text-[#0E0E11]">{message}</p>
    </div>
  </div>
)

export const ButtonLoader = () => (
  <LoadingSpinner size={20} color="currentColor" />
)
