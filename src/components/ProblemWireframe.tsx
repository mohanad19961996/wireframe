export default function ProblemWireframe() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Problem cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-lg p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-destructive/10 hover:-translate-y-2 hover:scale-105 group card-hover">
            <div className="w-10 h-10 bg-destructive/20 rounded-lg mx-auto mb-4 transition-all duration-300 group-hover:bg-destructive/30 group-hover:scale-110 group-hover:rotate-12"></div>
            <div className="w-24 h-4 bg-destructive/60 rounded mx-auto mb-3 transition-all duration-300 group-hover:bg-destructive/80"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-muted-foreground/40 rounded transition-all duration-300 group-hover:bg-muted-foreground/60"></div>
              <div className="w-4/5 h-3 bg-muted-foreground/40 rounded mx-auto transition-all duration-300 group-hover:bg-muted-foreground/60"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Cost visualization */}
      <div className="bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-destructive/15 hover:-translate-y-1 hover:scale-102 group">
        <div className="w-48 h-5 bg-destructive/70 rounded mx-auto mb-4 transition-all duration-300 group-hover:bg-destructive/90"></div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((index) => (
            <div key={index} className="space-y-2 transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="w-16 h-6 bg-destructive/80 rounded mx-auto transition-all duration-300 group-hover:bg-destructive group-hover:shadow-md"></div>
              <div className="w-20 h-3 bg-muted-foreground/50 rounded mx-auto transition-all duration-300 group-hover:bg-muted-foreground/70"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}