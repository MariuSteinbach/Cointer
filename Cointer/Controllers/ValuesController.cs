using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Cointer.Data;
using Cointer.Models;
using Microsoft.AspNetCore.Identity;

namespace Cointer.Controllers
{
    public class ValuesController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public ValuesController(ApplicationDbContext context,
                                UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: Values
        public async Task<IActionResult> Index()
        {
            foreach(Value Value in _context.Value)
            {
                ViewData[Value.ValueID] = _context.Coin.Where(c => c.OwnerID == _userManager.GetUserId(User) && c.ValueID == Value.ValueID).ToList().Count;
            }
            return View(await _context.Value.ToListAsync());
        }

        // GET: Values/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var value = await _context.Value
                .SingleOrDefaultAsync(m => m.ValueID == id);
            if (value == null)
            {
                return NotFound();
            }

            return View(value);
        }

        // GET: Values/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Values/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ValueID,Name,Cents")] Value value)
        {
            if (ModelState.IsValid)
            {
                _context.Add(value);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(value);
        }

        // GET: Values/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var value = await _context.Value.SingleOrDefaultAsync(m => m.ValueID == id);
            if (value == null)
            {
                return NotFound();
            }
            return View(value);
        }

        // POST: Values/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("ValueID,Name,Cents")] Value value)
        {
            if (id != value.ValueID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(value);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ValueExists(value.ValueID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(value);
        }

        // GET: Values/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var value = await _context.Value
                .SingleOrDefaultAsync(m => m.ValueID == id);
            if (value == null)
            {
                return NotFound();
            }

            return View(value);
        }

        // POST: Values/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var value = await _context.Value.SingleOrDefaultAsync(m => m.ValueID == id);
            _context.Value.Remove(value);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ValueExists(string id)
        {
            return _context.Value.Any(e => e.ValueID == id);
        }
    }
}
