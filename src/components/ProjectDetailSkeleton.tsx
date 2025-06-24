"use client";

const ProjectDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-dark text-white animate-pulse">
      {/* Main Content Container */}
      <div className="flex h-screen w-full max-w-7xl mx-auto">
        
        {/* LEFT COLUMN - Project Showcase Skeleton */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
          <div className="relative w-full h-4/5 max-w-2xl">
            <div className="w-full h-full bg-dark-secondary/30 rounded-2xl"></div>
          </div>
        </div>

        {/* RIGHT COLUMN - Project Information Skeleton */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 lg:pl-12">
          {/* Project Header Skeleton */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-20 h-6 bg-dark-secondary/30 rounded-full"></div>
              <div className="w-12 h-5 bg-dark-secondary/30 rounded"></div>
            </div>
            
            <div className="w-3/4 h-10 bg-dark-secondary/30 rounded mb-3"></div>
            <div className="w-1/2 h-6 bg-dark-secondary/30 rounded mb-6"></div>

            {/* Action Buttons Skeleton */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="w-32 h-12 bg-dark-secondary/30 rounded-lg"></div>
              <div className="w-32 h-12 bg-dark-secondary/30 rounded-lg"></div>
            </div>
          </div>

          {/* Content Tabs Skeleton */}
          <div className="mb-6">
            <div className="flex gap-1 bg-dark-secondary/30 rounded-lg p-1">
              <div className="flex-1 h-10 bg-dark-secondary/50 rounded-md"></div>
              <div className="flex-1 h-10 bg-dark-secondary/20 rounded-md"></div>
              <div className="flex-1 h-10 bg-dark-secondary/20 rounded-md"></div>
            </div>
          </div>

          {/* Tab Content Skeleton */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="w-full h-4 bg-dark-secondary/30 rounded"></div>
              <div className="w-5/6 h-4 bg-dark-secondary/30 rounded"></div>
              <div className="w-4/5 h-4 bg-dark-secondary/30 rounded"></div>
            </div>
            
            <div className="bg-dark-secondary/20 rounded-lg p-4">
              <div className="w-1/3 h-5 bg-dark-secondary/40 rounded mb-2"></div>
              <div className="w-full h-4 bg-dark-secondary/30 rounded"></div>
              <div className="w-3/4 h-4 bg-dark-secondary/30 rounded mt-2"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center p-4 bg-dark-secondary/20 rounded-lg">
                  <div className="w-6 h-6 bg-dark-secondary/40 rounded mx-auto mb-2"></div>
                  <div className="w-16 h-3 bg-dark-secondary/30 rounded mx-auto mb-1"></div>
                  <div className="w-12 h-4 bg-dark-secondary/40 rounded mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Next Project Navigation Skeleton */}
      <div className="border-t border-dark-secondary/30 bg-dark-secondary/10">
        <div className="max-w-7xl mx-auto p-8">
          <div className="flex items-center justify-between p-6 rounded-2xl border border-dark-secondary/30">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-dark-secondary/30 rounded"></div>
              <div>
                <div className="w-20 h-4 bg-dark-secondary/30 rounded mb-1"></div>
                <div className="w-32 h-6 bg-dark-secondary/30 rounded mb-1"></div>
                <div className="w-24 h-4 bg-dark-secondary/30 rounded"></div>
              </div>
            </div>
            <div className="w-6 h-6 bg-dark-secondary/30 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailSkeleton;
